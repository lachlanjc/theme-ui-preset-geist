import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea,
  Themed,
} from 'theme-ui'
import Prism from '@theme-ui/prism'
import Head from 'next/head'
import theme, { prism } from 'theme-ui-preset-geist'
import ColorSwitcher from '../components/color-switcher'
import DemoText from '../components/demo-text.mdx'
import { TypeScale, ColorPalette } from '@theme-ui/style-guide'

const DocsPage = () => (
  <>
    <Head>
      <title>Theme UI Geist Preset</title>
    </Head>
    <Box as="header">
      <Container sx={{ pt: [5, 6], pb: [3, 4], textAlign: 'center' }}>
        <ColorSwitcher />
        <Heading as="h1" variant="styles.h1" mb={0}>
          Theme UI Preset: Geist UI
        </Heading>
        <Text as="p" sx={{ fontSize: 3, mt: 2 }}>
          Theme + components for{' '}
          <Link href="https://theme-ui.com">Theme UI</Link>, derived from{' '}
          <Link href="https://geist-ui.dev">Geist UI</Link>.
        </Text>
        <Grid
          gap={5}
          columns="auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
          }}
        >
          <NavLink href="https://github.com/lachlanjc/theme-ui-preset-geist">
            GitHub
          </NavLink>
          <NavLink href="https://npmjs.com/package/theme-ui-preset-geist">
            npm
          </NavLink>
        </Grid>
      </Container>
    </Box>
    <Box
      as="section"
      sx={{ h2: { textAlign: 'center' }, bg: 'background', py: 4 }}
    >
      <Themed.h2 id="containers">Containers</Themed.h2>
      {Object.keys(theme.layout).map(key => (
        <Container
          key={key}
          variant={key}
          sx={{
            my: 3,
            py: 3,
            border: '2px dashed',
            borderColor: 'gray.2',
            borderRadius: 'default',
          }}
        >
          <Themed.inlineCode>{key}</Themed.inlineCode>
        </Container>
      ))}
    </Box>
    <Box
      as="main"
      sx={{ bg: 'background', color: 'text', py: 3, h2: { mt: 4, mb: 2 } }}
    >
      <Container variant="large">
        <Themed.h2 id="text">Text</Themed.h2>
        <BaseStyles sx={{ fontSize: 2 }}>
          <DemoText />
        </BaseStyles>
        <Themed.h2 id="buttons">Buttons</Themed.h2>
        <Grid columns={[null, 2, 3]} gap={3}>
          {Object.keys(theme.buttons).map(key => (
            <Button key={key} variant={key}>
              {key} btn
            </Button>
          ))}
        </Grid>
        <Themed.h2 id="cards">Cards</Themed.h2>
        <Grid columns={[null, 2, 3]} gap={3}>
          {Object.keys(theme.cards).map(key => (
            <Card variant={key} key={key} p={[3, 4]}>
              {key}
            </Card>
          ))}
        </Grid>
        <Themed.h2 id="forms">Forms</Themed.h2>
        <Grid
          gap={3}
          variant="cards.primary"
          as="form"
          onSubmit={e => e.preventDefault()}
        >
          <Label>
            Full name
            <Input placeholder="Evil Rabbit" />
          </Label>
          <Label>
            How are you primarily associated with Hack Club?
            <Select>
              <option value="" disabled hidden>
                Select one…
              </option>
              <option value="club-leader">I lead a club</option>
              <option value="club-member">I am a club member</option>
              <option value="slack-member">I am active on Slack</option>
              <option value="alum">I am a Hack Club alum</option>
              <option value="none">None of the above</option>
            </Select>
          </Label>
          <Label variant="labelHoriz">
            <Checkbox />
            Remember me
          </Label>
          <Flex sx={{ flexWrap: 'wrap' }}>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Alpha
            </Label>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Bravo
            </Label>
            <Label variant="labelHoriz">
              <Radio name="letter" /> Charlie
            </Label>
          </Flex>
          <Label>
            Why do you want to come?
            <Textarea placeholder="Write a few sentences." />
          </Label>
          <Label>
            Slider
            <Slider />
          </Label>
          <Button as="input" type="submit" variant="success" />
        </Grid>
        <Themed.h2 id="badges">Badges</Themed.h2>
        {Object.keys(theme.badges).map(key => (
          <Badge as="span" key={key} title={key} variant={key} mr={3} mb={2}>
            {key}
          </Badge>
        ))}
      </Container>
      <Container
        variant="large"
        sx={{
          pre: {
            maxHeight: '75vh',
            overflowY: 'auto',
          },
          ...prism,
        }}
      >
        <Themed.h2 id="colors">Colors</Themed.h2>
        <ColorPalette omit={['modes', 'code', 'selection', 'link']} />
        <Themed.h2 id="type-scale">Type scale</Themed.h2>
        <TypeScale />
        <Themed.h2 id="src">Source code</Themed.h2>
        <Prism as="pre" className="language-json" variant="styles.pre">
          {JSON.stringify(theme, null, 2)}
        </Prism>
        <Grid
          gap={5}
          columns="auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 4,
            mb: 3,
          }}
        >
          <NavLink href="https://github.com/lachlanjc/theme-ui-preset-geist">
            GitHub
          </NavLink>
          <NavLink href="https://npmjs.com/package/theme-ui-preset-geist">
            npm
          </NavLink>
        </Grid>{' '}
      </Container>
    </Box>
  </>
)

export default DocsPage
